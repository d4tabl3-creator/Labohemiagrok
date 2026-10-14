import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-L5p7vUe5.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid size-10 shrink-0 place-items-center border border-primary font-display text-sm text-primary", className),
		"aria-hidden": "true",
		children: "LB"
	});
}
var buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 px-4 text-sm tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40", {
	variants: { variant: {
		primary: "bg-primary text-primary-fg hover:bg-primary/90",
		ghost: "bg-transparent text-fg hover:bg-surface",
		line: "border border-border bg-transparent text-fg hover:border-primary"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
var controlClass = "min-h-11 w-full border border-border bg-bg px-3 text-sm text-fg outline-none transition-colors duration-200 placeholder:text-muted focus-visible:border-primary";
function Field({ label, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("grid gap-2 text-sm text-muted", className),
		children: [label, children]
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-xs uppercase tracking-widest text-primary", className),
		children
	});
}
//#endregion
export { cn as a, Mark as i, Eyebrow as n, controlClass as o, Field as r, Button as t };
