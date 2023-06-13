import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/common/Button";
import { AppLayout } from "@/layouts/AppLayout";
import { Meta } from "@/layouts/Meta";

function SignInButton() {
  const sess = useSession();
  const session = sess.data;
  console.log(sess);
  if (session) {
    return (
      <>
        Signed in: {JSON.stringify(session)} <br />
        <Button size="xl" onClick={() => signIn()}>
          Sign In
        </Button>
        <Button size="xl" onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button size="xl" onClick={() => signIn()}>
        Sign In
      </Button>
      <Button size="xl" onClick={() => signOut()}>
        Sign Out
      </Button>
    </>
  );
}

export default function AdminPage() {
  return (
    <AppLayout meta={<Meta title="Admin" />}>
      <SignInButton />
    </AppLayout>
  );
}
