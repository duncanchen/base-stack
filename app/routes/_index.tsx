import { useTranslation } from "react-i18next"
import type { MetaFunction } from "react-router"

export const meta: MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to the new Remix App!" }]
}

export default function Index() {
	const { t } = useTranslation()
	return (
		<div className="flex h-screen flex-col items-center justify-center bg-green-600 p-12 font-normal font-sans text-2xl text-green-100">
			<h1>{t("hi")}</h1>
		</div>
	)
}
