import { Switch } from "@/components/ui/switch";

export const Toggle = () => {
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between space-x-4">
        <p className="font-semibold shrink-0">Enable Notifications</p>
        <div className="space-x-2">
          <Switch/>
        </div>
      </div>
    </div>
  );
};
