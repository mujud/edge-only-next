export default function Page({
  params,
}: {
  params: { param: string; details: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      param
    </main>
  );
}
