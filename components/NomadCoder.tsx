const NOMADCODER_URL = "https://nomadcoders.co/";
const MY_DASHBOARD_URL = "https://nomadcoders.co/users/nuo";
const CHALLENGES_URL = "https://nomadcoders.co/challenges";

const NomadCoder = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold flex items-center space-x-2">
        <span>๐</span>
        <a target="_blank" href={NOMADCODER_URL} rel="noopener noreferrer">
          <span className="hover:underline">Nomad Coder</span>
        </a>
      </h2>

      <div className="px-4 flex flex-col space-y-2">
        <span className="text-sm">
          ์ค์  ์๋น์ค๋ฅผ ๋ฐ๋ผ ๋ง๋ค๋ฉด์ ์ฝ๋ฉ์ ์๋ ค์ฃผ๋ ์ฌ์ดํธ
        </span>

        <div>
          <span className="text-sm font-semibold">๊ฐ์ ์๊ฐ ๋ฐฉ๋ฒ</span>
          <ul className="ml-6 list-decimal mt-2 space-y-2">
            <li className="text-sm">
              ๊ฐ์๋ฅผ ๋ณด๊ณ  ๋ฐ๋ผ ์ฝ๋ฉํ๋ฉด์ ์ดํด๋ฅผ ํ๋ค.
            </li>
            <li className="text-sm">์ดํด๊ฐ ์ ์๋๋ค๋ฉด 1๋ฒ๊ณผ์ ์ ๋ฐ๋ณตํ๋ค.</li>
            <li className="text-sm">
              ์ฌ์ดํธ์์ ์ ๊ณตํ๋ ์ฑ๋ฆฐ์  ํ๋ก๊ทธ๋จ์ ํ์ฉํ๋ค.
              <a
                target="_blank"
                href={CHALLENGES_URL}
                rel="noopener noreferrer"
              >
                <span className=" ml-2 text-xs cursor-pointer hover:underline text-blue-500 font-semibold">
                  (์ฑ๋ฆฐ์  ํ๋ก๊ทธ๋จ์ด๋?)
                </span>
              </a>
            </li>
            <li className="text-sm">
              ๊ฐ์ ๊ณผ์ ์ ์ดํดํ๋ฉฐ ํผ์ ์ค์ค๋ก Document๋ฅผ ๋ณด๋ฉฐ ์ฌ์ด๋ ํ๋ก์ ํธ๋ฅผ
              ๋ง๋ค์ด ๋ณธ๋ค
            </li>
          </ul>
        </div>
        <a target="_blank" href={MY_DASHBOARD_URL} rel="noopener noreferrer">
          <span className="text-sm cursor-pointer hover:underline text-yellow-500 font-semibold">
            ๋์ ๋์๋ณด๋ ๋ณด๋ฌ๊ฐ๊ธฐ
          </span>
        </a>
      </div>
    </div>
  );
};

export default NomadCoder;
