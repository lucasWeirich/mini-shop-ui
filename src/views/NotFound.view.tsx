import usePageTitle from "../hooks/usePageTitle"

export default function NotFound() {

  usePageTitle('Not Found');

  return <h1>Not Found - 404</h1>
}