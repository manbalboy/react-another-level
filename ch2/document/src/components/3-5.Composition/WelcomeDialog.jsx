import CustomDialog from "./CustomDialog";

export default function WelcomeDialog() {
  return (
    <CustomDialog color="blue" title={"test"} description="fdsa">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </CustomDialog>
  );
}
