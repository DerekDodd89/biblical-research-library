import { notFound } from "next/navigation";

import ContextCircleWorkspace from "@/components/context-circle/ContextCircleWorkspace";

type ModulePageProps = {
  params: Promise<{
    module: string;
  }>;
};

const moduleRegistry = {
  "context-circle": ContextCircleWorkspace,
} as const;

type RegisteredModule = keyof typeof moduleRegistry;

function isRegisteredModule(module: string): module is RegisteredModule {
  return module in moduleRegistry;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { module } = await params;

  if (!isRegisteredModule(module)) {
    notFound();
  }

  const ModuleWorkspace = moduleRegistry[module];

  return <ModuleWorkspace />;
}