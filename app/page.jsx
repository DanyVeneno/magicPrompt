import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className=' orange_gradient head_text text-center'>
      Descubre & Comparte
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> MagicA.I. Prompts</span>
    </h1>
    <p className='desc text-center'>
      MagicPrompt es una herramienta de generación de ideas de inteligencia
      artificial de código abierto para el mundo moderno, que permite descubrir,
      crear y compartir ideas creativas.
    </p>

    <Feed />
  </section>
);

export default Home;
