"use client";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function page() {
  return (
    <div>
      <QueryClientProvider client={new QueryClient()}>
        <Table />
      </QueryClientProvider>
    </div>
  )
}
