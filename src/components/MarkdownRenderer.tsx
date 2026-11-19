import React from 'react';

interface MarkdownRendererProps {
  content: string;
  fontSize: 'normal' | 'large' | 'huge';
  nightVision: boolean;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  fontSize,
  nightVision
}) => {
  // Extract and process SVG blocks and Markdown tokens
  const renderBlocks = () => {
    // Split by code blocks
    const parts = content.split(/(```svg[\s\S]*?```|```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      // Check if this is an SVG block
      if (part.startsWith('```svg') && part.endsWith('```')) {
        const svgContent = part
          .replace(/^```svg\r?\n/, '')
          .replace(/\r?\n```$/, '')
          .trim();

        return (
          <div
            key={index}
            className={`my-6 p-2 rounded-xl border overflow-hidden shadow-2xl transition-all ${
              nightVision
                ? 'bg-[#150505] border-red-900/40 text-red-400 filter hue-rotate-320'
                : 'bg-[#0d1117] border-[#30363d]'
            }`}
          >
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Technical Vector Schematic
              </span>
              <span className="text-[10px] font-mono text-zinc-500">Vector SVG • Zero Network</span>
            </div>
            <div
              className="flex justify-center items-center overflow-x-auto p-1"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>
        );
      }

      // Check if generic code block
      if (part.startsWith('```') && part.endsWith('```')) {
        const code = part.replace(/^```[a-z]*\r?\n/, '').replace(/\r?\n```$/, '');
        return (
          <pre
            key={index}
            className="my-4 p-4 rounded-lg bg-[#0a0e14] border border-[#21262d] font-mono text-xs overflow-x-auto text-emerald-400"
          >
            <code>{code}</code>
          </pre>
        );
      }

      // Standard markdown lines
      const lines = part.split(/\r?\n/);
      return (
        <div key={index} className="space-y-3">
          {lines.map((line, lineIdx) => {
            const trimmed = line.trim();
            if (!trimmed) return <div key={lineIdx} className="h-1" />;

            // Headings
            if (trimmed.startsWith('## ')) {
              return (
                <h2
                  key={lineIdx}
                  className={`text-lg font-bold font-mono tracking-tight mt-6 mb-2 border-b pb-1.5 flex items-center gap-2 ${
                    nightVision
                      ? 'text-red-400 border-red-900/50'
                      : 'text-amber-400 border-zinc-800'
                  }`}
                >
                  <span className="text-zinc-500 text-xs font-mono">§</span>
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }

            if (trimmed.startsWith('### ')) {
              return (
                <h3
                  key={lineIdx}
                  className={`text-base font-semibold font-mono tracking-tight mt-4 mb-1 ${
                    nightVision ? 'text-red-300' : 'text-zinc-200'
                  }`}
                >
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }

            // Unordered list item
            if (trimmed.startsWith('- ')) {
              const listContent = trimmed.replace('- ', '');
              return (
                <div key={lineIdx} className="flex items-start gap-2.5 pl-2">
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      nightVision ? 'bg-red-500' : 'bg-amber-400'
                    }`}
                  />
                  <div
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatInline(listContent) }}
                  />
                </div>
              );
            }

            // Ordered list item (e.g. "1. ")
            const olMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
            if (olMatch) {
              return (
                <div key={lineIdx} className="flex items-start gap-2.5 pl-2 my-1">
                  <span
                    className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${
                      nightVision ? 'bg-red-950 text-red-400' : 'bg-zinc-800 text-amber-400'
                    }`}
                  >
                    {olMatch[1]}
                  </span>
                  <div
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatInline(olMatch[2]) }}
                  />
                </div>
              );
            }

            // Paragraph
            return (
              <p
                key={lineIdx}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
              />
            );
          })}
        </div>
      );
    });
  };

  // Helper to format bold, italic, and code inline
  const formatInline = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-zinc-300">$1</em>')
      .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-zinc-800/80 text-amber-300 font-mono text-[0.85em] border border-zinc-700/50">$1</code>')
      .replace(/\$\$(.*?)\$\$/g, '<div class="py-2 text-center font-mono text-sm text-cyan-300 bg-black/40 rounded p-2 my-2 border border-cyan-900/30">$1</div>')
      .replace(/\$(.*?)\$/g, '<span class="font-mono text-cyan-300 px-1">$1</span>');
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base sm:text-lg';
      case 'huge':
        return 'text-lg sm:text-xl';
      default:
        return 'text-sm sm:text-base';
    }
  };

  return (
    <article
      className={`prose prose-invert max-w-none transition-colors duration-200 ${getFontSizeClass()} ${
        nightVision ? 'text-red-200' : 'text-zinc-300'
      }`}
    >
      {renderBlocks()}
    </article>
  );
};
