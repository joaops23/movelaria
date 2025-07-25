import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1920px] flex-1">
        <div className="@container">
          <div className=" p-10 mt-4 text-[#85685a]">
            <h1 className="translate-2 text-center text-5xl font-medium">Odara</h1>
            <h3 className="translate-2 text-center text-2xl font-medium">Móveis planejados</h3>
          </div>
        </div>

        <div className="flex flex-1 flex-row text-[#85685a] justify-around items-center">
          <div className="col pr-2 mr-1">
            <p className="text-3xl max-w-100">Marcenaria Sob Medida: Beleza e Funcionalidade em Cada Detalhe.</p>
          </div>

          <div className="col justify-center items-center max-h-[350px]">
            <p>Foto inicial</p>
          </div>
        </div>

        <div className="text-[#85685a] underline">
          <p className="text-2xl text-center mt-10 font-medium">Personalizamos móveis e ambientes para refletir o seu estilo e atender às suas necessidades.</p>
        </div>

        <div className="text-[#85685a]">
          <p>Nossos Diferenciais</p>
        </div>

        <div className="text-[#85685a]">
          <p>Depoimentos</p>
        </div>
      </div>
    </div>
    
  );
}
