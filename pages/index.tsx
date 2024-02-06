import Image from "next/image";
import { Button, ButtonText } from "@/components/Button";
import { Provider } from "@/components/Provider";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
      style={{ backgroundColor: "white" }}
    >
      <Provider>
        <Button>
          <ButtonText>hello</ButtonText>
        </Button>
      </Provider>
    </main>
  );
}
