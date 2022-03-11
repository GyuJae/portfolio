const Contact = () => {
  return (
    <div>
      <span className="text-3xl font-semibold">
        Hello World, 정규재입니다! 🙋‍♂️
      </span>
      <ul className="space-y-3 mt-5">
        <li className="flex flex-col space-y-2">
          <span>✉️ Email</span>
          <span className="text-sm underline text-gray-400">
            wjdrbwo1206@naver.com
          </span>
        </li>
        <li className="flex flex-col space-y-2">
          <span>😺 Github</span>
          <span className="text-sm underline text-gray-400">
            <a
              target="_blank"
              href="https://github.com/GyuJae"
              rel="noopener noreferrer"
            >
              https://github.com/GyuJae
            </a>
          </span>
        </li>
        <li className="flex flex-col space-y-2">
          <span>📗 Velog</span>
          <span className="text-sm underline text-gray-400">
            <a
              target="_blank"
              href="https://velog.io/@nuo"
              rel="noopener noreferrer"
            >
              https://velog.io/@nuo
            </a>
          </span>
        </li>
      </ul>
      <div className="mt-5 flex flex-col space-y-2">
        <span className="font-semibold text-sm">Full Stack Developer</span>
        <span className="text-sm text-gray-800">호율을 중시하는 개발자</span>
        <span className="text-sm text-gray-800">
          서비스 사용자의 편의를 우선시 하는 개발자
        </span>
        <span className="text-sm text-gray-800">
          사람들이 필요로 하는 서비스는 무엇인지 고민하는 개발자
        </span>
      </div>
    </div>
  );
};

export default Contact;
