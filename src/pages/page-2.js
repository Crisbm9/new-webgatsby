import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1 className="nuse">Nuestros servicios</h1>
    <p>Aquí puedes ver algunos ejemplos realizados</p>

    <Link to="/">Volver a inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
