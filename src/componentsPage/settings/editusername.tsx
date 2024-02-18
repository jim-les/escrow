import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export const EditUserName=()=>{
    return(
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit userName</DialogTitle>
        </DialogHeader>
        <form  className="space-y-4">
          <Input
            placeholder="username"
           
          />
          <div className="flex justify-between">
            <DialogClose  asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              variant="primary"
            >
              Save
            </Button>
          </div>
        </form>
       </DialogContent> 
      </Dialog>
    )
}