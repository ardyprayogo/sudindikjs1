import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SelectInput from "@/Components/SelectInput";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import { useCallback, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function DashboardForm({ categories, news }) {
    const { data, setData, post, processing, errors, reset } = useForm(
        news
            ? {
                  id: news.id,
                  judul: news.judul,
                  kategori_id: news.kategori_id,
                  konten: news.konten,
                  desk_singkat: news.desk_singkat,
              }
            : {
                  judul: "",
                  kategori_id: "",
                  konten: "",
                  desk_singkat: "",
                  gambar: null,
              }
    );

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.news.store"), {
            onSuccess: () => {
                reset("kategori_id", "judul", "konten", "desk_singkat");
            },
        });
    };

    const quillRef = useRef(null);

    const customImageHandler = useCallback(() => {
        const imageUrl = prompt("Masukkan link gambar:");
        if (imageUrl && quillRef.current) {
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection(true);
            quill.insertEmbed(range.index, "image", imageUrl, "user");
        }
    }, []);

    const quillModules = {
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, false] }],
                ["image", "link"],
                ["bold", "italic", "underline", "strike", "blockquote"],
            ],

            handlers: {
                image: customImageHandler,
            },
        },
    };

    const quillFormats = [
        "header",
        "blockquote",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
    ];
    return (
        <form className="flex flex-col gap-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="kategori_id" value="Label Berita" />
                <SelectInput
                    id="kategori_id"
                    name="kategori_id"
                    placeholder="Pilih Label"
                    className="block lg:w-3/4 w-full"
                    onChange={(e) => setData("kategori_id", e.target.value)}
                    defaultValue={data.kategori_id}
                >
                    <option value="" disabled hidden>
                        Pilih Label
                    </option>
                    {categories.map((category, i) => {
                        return (
                            <option key={i} value={category.id}>
                                {category.kategori}
                            </option>
                        );
                    })}
                </SelectInput>
                <InputError message={errors.kategori_id} />
            </div>
            {!news && (
                <div className="flex flex-col gap-2">
                    <InputLabel htmlFor="gambar" value="Cover" />
                    <FileInput
                        id="gambar"
                        name="gambar"
                        accept="image/png, image/jpeg"
                        className="block lg:w-3/4 w-full"
                        onChange={(e) => {
                            setData("gambar", e.target.files[0]);
                        }}
                    />
                    <InputError message={errors.gambar} />
                </div>
            )}
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="news_label" value="Judul Berita" />
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
                <InputLabel htmlFor="desk_singkat" value="Deskripsi Berita" />
                <TextArea
                    id="desk_singkat"
                    name="desk_singkat"
                    value={data.desk_singkat}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("desk_singkat", e.target.value)}
                ></TextArea>
                <InputError message={errors.desk_singkat} />
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="konten" value="Konten" />
                <ReactQuill
                    id="konten"
                    name="konten"
                    className="bg-white block lg:w-3/4 w-full"
                    theme="snow"
                    value={data.konten}
                    modules={quillModules}
                    ref={quillRef}
                    formats={quillFormats}
                    onChange={(e) => {
                        setData("konten", e);
                    }}
                />
                <InputError message={errors.konten} />
            </div>

            <div className="flex gap-2">
                <Link href={route("dashboard.news.index")}>
                    <SecondaryButton>Batal</SecondaryButton>
                </Link>

                <PrimaryButton disabled={processing}>Simpan</PrimaryButton>
            </div>
        </form>
    );
}
