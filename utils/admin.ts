export function isAdmin(email: string | undefined): boolean {
  if (!email) return false;
  const list = (
    process.env.ADMIN_EMAILS ?? "dgalarraga00@gmail.com,info@twonutris.net"
  )
    .split(",")
    .map((e) => e.trim());
  return list.includes(email);
}
