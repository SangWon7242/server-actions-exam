import getMessage from "@/app/anything";

const ServerExample = async () => {
  const message = await getMessage();

  return (
    <div>
      <h1>Server Example</h1>
      <p>{message}</p>
    </div>
  );
};

export default ServerExample;
