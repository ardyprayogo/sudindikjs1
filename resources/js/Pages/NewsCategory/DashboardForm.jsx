import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";

export default function DashboardForm({ category }) {
    const { data, setData, post, processing, errors, reset } = useForm(
        category
            ? {
                  id: category.id,
                  kategori: category.kategori,
              }
            : {
                  kategori: "",
              }
    );

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.newsCategory.store"), {
            onSuccess: () => {
                reset("kategori");
            },
        });
    };
    return (
        <form className="flex flex-col gap-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="kategori" value="Kategori Berita" />
                <TextInput
                    id="kategori"
                    type="text"
                    name="kategori"
                    value={data.kategori}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("kategori", e.target.value)}
                />

                <InputError message={errors.kategori} />
            </div>

            <div className="flex gap-2">
                <Link href={route("dashboard.newsCategory.index")}>
                    <SecondaryButton>Batal</SecondaryButton>
                </Link>

                <PrimaryButton disabled={processing}>Simpan</PrimaryButton>
            </div>
        </form>
    );
}
