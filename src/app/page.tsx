"use client";
import Image from "next/image";

//sui imports

import { ConnectButton, useAccounts } from '@mysten/dapp-kit';

export default function Home() {

  const accounts = useAccounts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      {accounts.length === 0 && <div>No accounts detected</div>}
			<ul>
				{accounts.map((account) => (
					<li key={account.address}>- {account.address}</li>
				))}
			</ul>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          
            <ConnectButton />
        </div>
      </div>
    </main>
  );
}
