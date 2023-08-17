import { useContext } from "react";
import Paragraph from "./paragraph";
import { ThemeContext } from "./context/ThemeProvider";

// Context
// CompA => Comp B => CompC
// Theme: Dark / Light

//1. create Context
//2. Provider
//3. Consumer component
export default function Context() {
  const context = useContext(ThemeContext);
  console.log("🚀 ~ file: context.jsx:14 ~ Context ~ context:", context)
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Paragraph />
    </div>
  );
}
