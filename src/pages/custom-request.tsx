import "@typeform/embed/build/css/widget.css";

import { createWidget } from "@typeform/embed";
import { useEffect, useRef } from "react";

import { AppLayout } from "@/layouts/AppLayout";
import { Meta } from "@/layouts/Meta";

function useTypeformWidget(id: string) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      createWidget(id, {
        container: ref.current,
        height: 600,
      });
    }
  });
  return ref;
}

export default function CustomRequestIndexPage() {
  const newClientFormRef = useTypeformWidget("djEwoPSB");
  const customRequestFormRef = useTypeformWidget("GU8mFH90");
  return (
    <AppLayout meta={<Meta title="White-Glove VIP Service" />}>
      <section className="mx-auto max-w-screen-lg pt-12 sm:px-6 lg:px-8">
        <h1 className="font-brand text-3xl">White-Glove VIP Service</h1>
        <p className="mt-8">
          Our agency provides white-glove service for you to launch custom
          products &ndash; we do everything from design, sampling, production,
          packaging and quality control, to global fulfillment.
        </p>
        <p className="mt-4">
          White-glove VIP service MOQ starts at 1,000 units.
        </p>
        <p className="mt-4">
          <b>
            This service will be replaced by our AI-powered custom product
            sourcing agent soon.
          </b>
          In the meantime, Please submit your request below and our team will
          get back to you within 24 &ndash; 48 hours.
        </p>
        <h2 className="mb-2 mt-4 text-2xl">
          New Client? Fill out this form first:
        </h2>
        <div ref={newClientFormRef} />
        <h2 className="mb-2 mt-4 text-2xl">
          Submit a Custom Product Sourcing Request
        </h2>
        <p className="mb-2">
          Limit one form to one custom product submission. If you are looking to
          source multiple products, please fill out this form multiple times.
        </p>
        <div ref={customRequestFormRef} />
      </section>
    </AppLayout>
  );
}
