import Avatar from "./components/Avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Avatar
        name="Mirko"
        avatarUrl="https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash"
      />
    </main>
  );
}
