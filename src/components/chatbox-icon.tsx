interface IChatboxIcon {
  openChart: () => void;
}
export const ChatboxIcon = ({ openChart }: IChatboxIcon) => {
  return (
    <div
      className="hover:cursor-pointer fixed right-5 bottom-3 bg-[#58B0E0] p-2 rounded-full shadow-md shadow-gray-700"
      onClick={openChart}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 61.8 61.8"
        id="avatar"
        className="w-8"
      >
        <g data-name="Layer 2">
          <g data-name="—ÎÓÈ 1">
            <circle cx="30.9" cy="30.9" r="30.9" fill="#58b0e0" />
            <path
              fill="#f9dca4"
              fill-rule="evenodd"
              d="m23.255 38.68 15.907.121v12.918l-15.907-.121V38.68z"
            />
            <path
              fill="#e6e6e6"
              fill-rule="evenodd"
              d="M43.971 58.905a30.967 30.967 0 0 1-25.843.14V48.417H43.97z"
            />
            <path
              fill="#e9573e"
              fill-rule="evenodd"
              d="M33.403 61.7q-1.238.099-2.503.1-.955 0-1.895-.057l1.03-8.988h2.41z"
            />
            <path
              fill="#677079"
              fill-rule="evenodd"
              d="M25.657 61.332A34.072 34.072 0 0 1 15.9 57.92a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 5.212 1.711 13.482 2.405 18.95z"
            />
            <path
              fill-rule="evenodd"
              d="M39.165 38.759v3.231c-4.732 5.527-13.773 4.745-15.8-3.412z"
              opacity=".11"
            />
            <path
              fill="#ffe8be"
              fill-rule="evenodd"
              d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"
            />
            <path
              fill="#f9dca4"
              fill-rule="evenodd"
              d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 0 1-1.472-7.659zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 0 0 1.471-7.658z"
            />
            <path
              fill="#464449"
              fill-rule="evenodd"
              d="M21.931 14.328c-3.334 3.458-2.161 13.03-2.161 13.03l-1.05-.495c-6.554-25.394 31.634-25.395 25.043 0l-1.05.495s1.174-9.572-2.16-13.03c-4.119 3.995-14.526 3.974-18.622 0z"
            />
            <path
              fill="#677079"
              fill-rule="evenodd"
              d="M36.767 61.243a30.863 30.863 0 0 0 17.408-10.018l-1.09-2.631-13.924-6.212c0 5.212-1.7 13.393-2.394 18.861z"
            />
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="m39.162 41.98-7.926 6.465 6.573 5.913s1.752-9.704 1.353-12.378z"
            />
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="m23.253 41.98 7.989 6.465-6.645 5.913s-1.746-9.704-1.344-12.378z"
            />
            <path
              fill="#e9573e"
              fill-rule="evenodd"
              d="m28.109 51.227 3.137-2.818 3.137 2.818-3.137 2.817-3.137-2.817z"
            />
            <path
              fill="#434955"
              fill-rule="evenodd"
              d="M25.767 61.373a30.815 30.815 0 0 1-3.779-.88 2.652 2.652 0 0 1-.114-.093l-3.535-6.39 4.541-3.26h-4.752l1.017-6.851 4.11-2.599c.178 7.37 1.759 15.656 2.512 20.073zM36.645 61.266c.588-.098 1.17-.234 1.747-.384a56.83 56.83 0 0 0 2.034-.579l.134-.043 3.511-6.315-4.541-3.242h4.752l-1.017-6.817-4.11-2.586c-.178 7.332-1.758 15.571-2.51 19.966z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
