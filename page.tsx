import { AlertInfo } from "@/components/alert";

const TestAlert = () => {
  return (
    <div className="m-10">
      <AlertInfo title="Test Alert">
       Alert Info
      </AlertInfo>
    
      <AlertInfo title="Success Alert">
       Alert Info
      </AlertInfo>

        <AlertInfo title="Warning Alert">
         Alert Info
        </AlertInfo>

        <AlertInfo title="Danger Alert">
         Alert Info
        </AlertInfo>
    </div>
  );
}

export default TestAlert;
