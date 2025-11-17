import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";

export default function DashboardForm({ service }) {
    const { data, setData, post, processing, errors, reset } = useForm(
        service
            ? {
                  id: service.id,
                  judul: service.judul,
                  sub_judul: service.sub_judul,
                  deskripsi: service.deskripsi,
                  dokumen: service.dokumen,
              }
            : {
                  judul: "",
                  sub_judul: "",
                  deskripsi: "",
                  dokumen: "",
              }
    );

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.service.store"), {
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
                <InputLabel htmlFor="sub_judul" value="Sub Judul" />
                <TextInput
                    id="sub_judul"
                    type="text"
                    name="sub_judul"
                    value={data.sub_judul}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("sub_judul", e.target.value)}
                />

                <InputError message={errors.sub_judul} />
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="dokumen" value="Link Dokumen" />
                <TextInput
                    id="dokumen"
                    type="text"
                    name="dokumen"
                    value={data.dokumen}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("dokumen", e.target.value)}
                />

                <InputError message={errors.dokumen} />
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
                <Link href={route("dashboard.service.index")}>
                    <SecondaryButton>Batal</SecondaryButton>
                </Link>

                <PrimaryButton disabled={processing}>Simpan</PrimaryButton>
            </div>
        </form>
    );
}
