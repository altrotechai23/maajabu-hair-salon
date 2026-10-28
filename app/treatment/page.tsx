import { redirect } from "next/navigation";
export const metadata = { title: "Women’s Hair Services | Maajabu Hair Salon" };
export default function TreatmentPage() {
  redirect("/services");
}
