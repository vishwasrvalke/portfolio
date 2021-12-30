import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../constants/data";

export default function Home() {
  return (
    <ContainerBlock
      title="Vishwas R Valke - Developer"
      description="Developer portfolio website"
    >
      <Hero />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
