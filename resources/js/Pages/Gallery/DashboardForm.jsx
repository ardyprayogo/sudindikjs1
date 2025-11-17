import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";

export default function DashboardForm({ gallery }) {
    const { data, setData, post, processing, errors, reset } = useForm(
        gallery
            ? {
                  id: gallery.id,
                  judul: gallery.judul,
                  deskripsi: gallery.deskripsi,
                  gambar: gallery.gambar,
              }
            : {
                  judul: "",
                  deskripsi: "",
                  gambar: "",
              }
    );

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.gallery.store"), {
            onSuccess: () => {
                reset("judul");
            },
        });
    };
    return (
        <form className="flex flex-col gap-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="judul" value="Judul" />
                <TextInput
                    id="judul"
                    type="text"
                    name="judul"
                    value={data.judul}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("judul", e.target.value)}
                />

                <InputError message={errors.judul} />
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="gambar" value="Link Gambar" />
                <TextInput
                    id="gambar"
                    type="text"
                    name="gambar"
                    value={data.gambar}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("gambar", e.target.value)}
                />

                <InputError message={errors.gambar} />
            </div>

            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="deskripsi" value="Deskripsi" />
                <TextArea
                    id="deskripsi"
                    name="deskripsi"
                    value={data.deskripsi}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("deskripsi", e.target.value)}
                ></TextArea>
                <InputError message={errors.deskripsi} />
            </div>

            <div className="flex gap-2">
                <Link href={route("dashboard.gallery.index")}>
                    <SecondaryButton>Batal</SecondaryButton>
                </Link>

                <PrimaryButton disabled={processing}>Simpan</PrimaryButton>
            </div>
        </form>
    );
}
