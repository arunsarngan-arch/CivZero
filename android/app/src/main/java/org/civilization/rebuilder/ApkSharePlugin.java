package org.civilization.rebuilder;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

@CapacitorPlugin(name = "ApkShare")
public class ApkSharePlugin extends Plugin {

    @PluginMethod
    public void getApkInfo(PluginCall call) {
        try {
            Context context = getContext();
            PackageManager pm = context.getPackageManager();
            String packageName = context.getPackageName();
            ApplicationInfo appInfo = pm.getApplicationInfo(packageName, 0);
            PackageInfo packageInfo = pm.getPackageInfo(packageName, 0);

            String sourceDir = appInfo.sourceDir;
            File apkFile = new File(sourceDir);

            JSObject ret = new JSObject();
            ret.put("isNative", true);
            ret.put("packageName", packageName);
            ret.put("versionName", packageInfo.versionName);
            ret.put("apkPath", sourceDir);
            ret.put("exists", apkFile.exists());
            ret.put("sizeBytes", apkFile.exists() ? apkFile.length() : 0);
            ret.put("sizeFormatted", formatFileSize(apkFile.length()));

            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to retrieve APK metadata: " + e.getMessage(), e);
        }
    }

    @PluginMethod
    public void shareInstalledApk(PluginCall call) {
        try {
            Context context = getContext();
            PackageManager pm = context.getPackageManager();
            String packageName = context.getPackageName();
            ApplicationInfo appInfo = pm.getApplicationInfo(packageName, 0);

            File originalApk = new File(appInfo.sourceDir);
            if (!originalApk.exists()) {
                call.reject("Base APK file not found at " + appInfo.sourceDir);
                return;
            }

            // Copy to cache dir with clean human-readable name for sharing
            File cacheDir = new File(context.getCacheDir(), "shared_apks");
            if (!cacheDir.exists()) {
                cacheDir.mkdirs();
            }

            File exportApk = new File(cacheDir, "Civilization-Rebuilder-Survival-App.apk");
            copyFile(originalApk, exportApk);

            // Generate content URI via FileProvider
            String authority = packageName + ".fileprovider";
            Uri contentUri = FileProvider.getUriForFile(context, authority, exportApk);

            Intent shareIntent = new Intent(Intent.ACTION_SEND);
            shareIntent.setType("application/vnd.android.package-archive");
            shareIntent.putExtra(Intent.EXTRA_STREAM, contentUri);
            shareIntent.putExtra(Intent.EXTRA_SUBJECT, "Civilization Rebuilder — Offline Survival Encyclopedia");
            shareIntent.putExtra(Intent.EXTRA_TEXT, "Offline survival encyclopedia installer. Install directly via Files/Package Installer without internet.");
            shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);

            Intent chooser = Intent.createChooser(shareIntent, "Share App Installer (Quick Share / Bluetooth / Wi-Fi Direct)");
            chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(chooser);

            JSObject ret = new JSObject();
            ret.put("success", true);
            ret.put("sharedPath", exportApk.getAbsolutePath());
            ret.put("uri", contentUri.toString());
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to share APK: " + e.getMessage(), e);
        }
    }

    private static void copyFile(File src, File dst) throws Exception {
        try (InputStream in = new FileInputStream(src); OutputStream out = new FileOutputStream(dst)) {
            byte[] buf = new byte[65536];
            int len;
            while ((len = in.read(buf)) > 0) {
                out.write(buf, 0, len);
            }
        }
    }

    private static String formatFileSize(long bytes) {
        if (bytes <= 0) return "0 B";
        if (bytes < 1024) return bytes + " B";
        int exp = (int) (Math.log(bytes) / Math.log(1024));
        char pre = "KMGTPE".charAt(exp - 1);
        return String.format("%.1f %sB", bytes / Math.pow(1024, exp), pre);
    }
}
