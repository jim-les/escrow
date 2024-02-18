import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Toggle } from "./toggle";
import { EditUserName } from "./editusername";
import { Label } from "@/components/ui/label";

export const Setting = () => {
  return (
    <div className="bg-[hsla(0,0%,8%,0.9)] h-[100vh]">
      <div className="border border-slate-400 rounded-md p-4 mt-4">
        <div>
          <h1 className="text-2xl text-semibold mb-4">Profile</h1>
          <div>
            <Label>UserName</Label>
            <div
              className={cn("flex justify-between items-center text-gray-400")}
            >
              <p>
                Set a customized username for your profile.Real names or social
                account names are not recomended
              </p>
              <div className="flex space-x-4 items-center">
                <p>7144sam.</p>
                <EditUserName/>
              </div>
            </div>
          </div>
          <div>
          <Label>Profile</Label>
            <div
              className={cn("flex justify-between items-center text-gray-400")}
            >
              <p>Select an avatar to personalize your account</p>
              <div className="flex space-x-4 items-center">
                <Avatar className="w-[50px] h-[50px] my-3">
                  <AvatarImage src={""} alt="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button variant="link" className="text-white">
                  Edit
                </Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="border border-slate-400 rounded-md p-4 mt-4">
        <div>
        <Label>Notifications</Label>
         
          <div className={cn("flex justify-between items-center text-gray-400 ")}>
            <p>Allow notifications to pop up on yur device anytime there is</p>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};
