import { forwardRef, useId, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

/**
 * Labeled text input matching brand body-text styling (`font-poppins`) with
 * a real focus ring/border — the raw `<input>` elements this replaces had no
 * visible focus state or brand-consistent border color beyond the browser
 * default. Forwards its ref so `react-hook-form`'s `register()` can attach
 * directly, same call-site shape as before:
 * `<TextField label="Correo" id="email" {...register("email")} />`.
 * `label`/`id` stay real `<label htmlFor>` + `<input id>` pairs so existing
 * `getByLabelText` test queries keep working unchanged.
 *
 * Design-refinement pass: `type="password"` fields get a show/hide toggle
 * (real UX guideline, `ui-ux-pro-max` Forms category — "Let users see
 * password while typing"). Only wired for `type="password"`; every other
 * input type renders exactly as before, byte-for-byte.
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, id, error, className, type, ...rest },
  ref,
) {
  const [revealed, setRevealed] = useState(false);
  const generatedId = useId();
  const toggleId = `${id ?? generatedId}-toggle`;
  const isPassword = type === "password";
  const inputClassName = `rounded-xl border px-3.5 py-2.5 text-sm font-poppins text-leaf placeholder:text-leaf/40 transition-colors focus:outline-none focus:ring-2 focus:ring-amber/40 ${
    error ? "border-red-400" : "border-leaf/20 focus:border-leaf"
  } ${isPassword ? "pr-11" : ""} ${className ?? ""}`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium font-poppins text-leaf">
        {label}
      </label>
      {isPassword ? (
        <div className="relative">
          <input
            id={id}
            ref={ref}
            type={revealed ? "text" : "password"}
            aria-invalid={error ? true : undefined}
            className={`w-full ${inputClassName}`}
            {...rest}
          />
          <button
            id={toggleId}
            type="button"
            onClick={() => setRevealed((prev) => !prev)}
            aria-label={revealed ? "Ocultar contraseña" : "Mostrar contraseña"}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-leaf/50 transition-colors duration-200 hover:text-leaf focus:outline-none focus-visible:text-leaf"
          >
            {revealed ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
          </button>
        </div>
      ) : (
        <input
          id={id}
          ref={ref}
          type={type}
          aria-invalid={error ? true : undefined}
          className={inputClassName}
          {...rest}
        />
      )}
      {error && (
        <p role="alert" className="text-xs font-poppins text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});
