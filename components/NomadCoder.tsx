const NOMADCODER_URL = "https://nomadcoders.co/";
const MY_DASHBOARD_URL = "https://nomadcoders.co/users/nuo";
const CHALLENGES_URL = "https://nomadcoders.co/challenges";

const NomadCoder = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold flex items-center space-x-2">
        <span>🔔</span>
        <a target="_blank" href={NOMADCODER_URL} rel="noopener noreferrer">
          <span className="hover:underline">Nomad Coder</span>
        </a>
      </h2>

      <div className="px-4 flex flex-col space-y-2">
        <span className="text-sm">
          실제 서비스를 따라 만들면서 코딩을 알려주는 사이트
        </span>

        <div>
          <span className="text-sm font-semibold">강의 수강 방법</span>
          <ul className="ml-6 list-decimal mt-2 space-y-2">
            <li className="text-sm">
              강의를 보고 따라 코딩하면서 이해를 한다.
            </li>
            <li className="text-sm">이해가 잘 안된다면 1번과정을 반복한다.</li>
            <li className="text-sm">
              사이트에서 제공하는 챌린저 프로그램을 활용한다.
              <a
                target="_blank"
                href={CHALLENGES_URL}
                rel="noopener noreferrer"
              >
                <span className=" ml-2 text-xs cursor-pointer hover:underline text-blue-500 font-semibold">
                  (챌린저 프로그램이란?)
                </span>
              </a>
            </li>
            <li className="text-sm">
              강의 과정을 이해하며 혼자 스스로 Document를 보며 사이드 프로젝트를
              만들어 본다
            </li>
          </ul>
        </div>
        <a target="_blank" href={MY_DASHBOARD_URL} rel="noopener noreferrer">
          <span className="text-sm cursor-pointer hover:underline text-yellow-500 font-semibold">
            나의 대시보드 보러가기
          </span>
        </a>
      </div>
    </div>
  );
};

export default NomadCoder;
