import { useEffect } from "react";
import { useRouter } from "next/router";

export default function custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000)
    }, []);
    return (
        <div>Kosong BOS</div>
    )
}
