import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";

export default function DashboardForm({ user }) {
    const { data, setData, post, processing, errors, reset } = useForm(
        user
            ? {
                  id: user.id,
                  name: user.name,
                  email: user.email,
              }
            : {
                  name: "",
                  email: "",
              }
    );
    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.user.store"), {
            onSuccess: () => {
                reset("news_label");
            },
        });
    };
    return (
        <form className="flex flex-col gap-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="name" value="Nama" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} />
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                    id="email"
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} />
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="password" value="Password" />
                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) => setData("password", e.target.value)}
                />

                <InputError message={errors.password} />
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel
                    htmlFor="password_confirmation"
                    value="Konfirmasi Password"
                />
                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block lg:w-3/4 w-full"
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                />

                <InputError message={errors.password_confirmation} />
            </div>

            <div className="flex gap-2">
                <Link href={route("dashboard.user.index")}>
                    <SecondaryButton>Batal</SecondaryButton>
                </Link>

                <PrimaryButton disabled={processing}>Simpan</PrimaryButton>
            </div>
        </form>
    );
}
