import { ReactElement } from "react";

const Header: React.FC = (): ReactElement => {
  return (
    <>
      <div className="min-h-32 bg-indigo-400">
        <div className="bg-transparent text-white p-10">
          <div className="flex">
            <img
              className="inline-block size-[46px] rounded-full"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Avatar"
            />
            <div className="ml-5">
              Welcome to ecommerce!
              <br />
              Good morning, user
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
