import { Button } from "../Button/Button";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  backgroundColor = "#fff",
  textColor = "#333",
  buttonColor = "bg-indigo-600",
  buttonTextColor = "text-white",
}: HeaderProps) => (
  <header style={{ backgroundColor }}>
    <div className="flex justify-between items-center border-b border-gray-200 p-4 font-sans">
      <div className="flex items-center">
        <img
          src="/src/assets/portrait.png"
          height={40}
          width={40}
          className="rounded-full"
        />
        <h1
          className="inline-block align-top ml-2 text-lg font-bold leading-none"
          style={{ color: textColor }}
        >
          Sose Sahakian
        </h1>
      </div>
      <div className="flex items-center space-x-2">
        {user ? (
          <>
            <span
              className="text-sm text-gray-800 mr-2"
              style={{ color: textColor }}
            >
              Welcome, <b>{user.name}</b>!
            </span>
            <Button
              size="small"
              onClick={onLogout}
              label="Log out"
              backgroundColor={buttonColor}
              textColor={buttonTextColor}
            />
          </>
        ) : (
          <>
            <Button
              size="small"
              onClick={onLogin}
              label="Log in"
              backgroundColor={buttonColor}
              textColor={buttonTextColor}
            />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
              backgroundColor={buttonColor}
              textColor={buttonTextColor}
            />
          </>
        )}
      </div>
    </div>
  </header>
);
