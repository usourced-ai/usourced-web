export function getServerSideProps() {
  return {
    redirect: {
      destination: "/my/projects",
      permanent: false,
    },
  };
}

export default function MyPage() {
  return null;
}
