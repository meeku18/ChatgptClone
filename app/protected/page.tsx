import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LeftSection from "@/components/mycomp/leftSection";
import RightSection from "@/components/mycomp/rightSection";

export default async function ProtectedPage() {
  
  return( 
    <div className="h-full bg-[#212121] text-white grid grid-cols-[18%_82%]">
      <div>
        <LeftSection></LeftSection>
      </div>
      <div>
        <RightSection></RightSection>
      </div>
    </div>
  );
}
