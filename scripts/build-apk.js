// Master Automated CivZero APK Build Pipeline
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('=====================================================');
console.log('🚀 CIVZERO AUTOMATED RELEASE PIPELINE STARTING');
console.log('=====================================================');

// 1. Locate Android Studio's bundled JDK (JBR) for reliable Windows compilation
const androidStudioJbr = 'C:\\Program Files\\Android\\Android Studio\\jbr';
const env = { ...process.env };
if (fs.existsSync(androidStudioJbr)) {
  env.JAVA_HOME = androidStudioJbr;
  env.PATH = `${path.join(androidStudioJbr, 'bin')};${env.PATH}`;
  console.log(`☕ Using Android Studio JBR at: ${androidStudioJbr}`);
}

const run = (cmd, cwd = process.cwd()) => {
  console.log(`\n▶️ Executing: ${cmd}`);
  execSync(cmd, { cwd, env, stdio: 'inherit' });
};

try {
  // Step 1: Recompile SQLite knowledge packs & FTS5 database
  console.log('\n[1/5] Compiling SQLite databases & knowledge packs...');
  run('node scripts/build-packs.js');

  // Step 2: Build Vite + React frontend bundle
  console.log('\n[2/5] Building production web application (Vite)...');
  run('npm.cmd run build');

  // Step 3: Sync web assets with Capacitor Android bridge
  console.log('\n[3/5] Syncing Capacitor native assets...');
  run('npx.cmd cap sync android');

  // Step 4: Ensure SQLite precompiled databases are mirrored in Android assets
  console.log('\n[4/5] Mirroring SQLite database packs to Android assets...');
  const srcPacks = path.resolve('public/packs');
  const destPacks = path.resolve('android/app/src/main/assets/public/packs');
  fs.mkdirSync(destPacks, { recursive: true });
  fs.readdirSync(srcPacks).forEach(file => {
    fs.copyFileSync(path.join(srcPacks, file), path.join(destPacks, file));
  });
  console.log('✅ Master databases synced to native assets.');

  // Step 5: Run Gradle assembleRelease with --no-daemon
  console.log('\n[5/5] Compiling and packaging signed Android release APK...');
  const gradlewCmd = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';
  run(`${gradlewCmd} assembleRelease --no-daemon`, path.resolve('android'));

  // Step 6: Locate and copy output to /releases
  const releasesDir = path.resolve('releases');
  fs.mkdirSync(releasesDir, { recursive: true });

  const possibleApkPaths = [
    path.resolve('android/app/build/outputs/apk/release/CivZero-v1.0-Offline-Rebuilder.apk'),
    path.resolve('android/app/release/CivZero-v1.0-Offline-Rebuilder.apk'),
    path.resolve('android/app/build/outputs/apk/release/app-release.apk')
  ];

  let foundApk = null;
  for (const p of possibleApkPaths) {
    if (fs.existsSync(p)) {
      foundApk = p;
      break;
    }
  }

  if (foundApk) {
    const destApk = path.join(releasesDir, 'CivZero-v1.0-Offline-Rebuilder.apk');
    fs.copyFileSync(foundApk, destApk);
    const stats = fs.statSync(destApk);
    const mbSize = (stats.size / (1024 * 1024)).toFixed(2);

    console.log('\n=====================================================');
    console.log('🎉 SUCCESS! CIVZERO STANDALONE APK BUILT & SIGNED!');
    console.log('=====================================================');
    console.log(`📦 Output Location: ${destApk}`);
    console.log(`📊 File Size:       ${mbSize} MB`);
    console.log('✨ Ready to install on Android or distribute publicly!');
    console.log('=====================================================\n');
  } else {
    console.warn('⚠️ Build finished, please check android/app/build/outputs/apk/release/');
  }

} catch (err) {
  console.error('\n❌ Build pipeline error:', err.message);
  process.exit(1);
}
