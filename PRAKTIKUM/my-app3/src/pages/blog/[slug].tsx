import {useRouter} from "next/router";

export default function BlogSlug() {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <h3>Halaman Blog</h3>
            <p>Slug yang dipilih: <strong>{slug}</strong></p>
        </div>
    );
};