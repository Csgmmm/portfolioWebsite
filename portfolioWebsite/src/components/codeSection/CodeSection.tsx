import styles from "./codeSection.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { ICodeItem } from "../../types/projectsData";

interface CodeSectionProps {
  code?: ICodeItem[];
} //no projectsData.ts tem o export interface do codeItem, porque ja sabia previamente que ia rutilizar para um componente, portanto importo esse export para aqui e chamo-o com code?: ICodeItem[];
export const CodeSection = ({ code }: CodeSectionProps) => {
  return (
    <div className={styles.codeWindow}>
      {code?.map((item) => (
        <div>
          <div className={styles.codeHeader}>
            <span className={styles.filename}>{item.filename}</span>
          </div>

          <div className={styles.codeBody}>
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "1rem",
                background: "transparent",
                fontSize: "0.9rem",
              }}
            >
              {item.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
};