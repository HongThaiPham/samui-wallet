import type { Wallet } from '@workspace/db/entity/wallet'

import { Button } from '@workspace/ui/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu'
import { toastSuccess } from '@workspace/ui/lib/toast-success'
import { LucideWallet2 } from 'lucide-react'
import { Link } from 'react-router'

import { WalletUiItem } from './wallet-ui-item.js'

export function SettingsUiWalletDropdown({
  active,
  items,
  setActive,
}: {
  active: null | Wallet
  items: Wallet[]
  setActive: (id: string) => Promise<void>
}) {
  if (!active) {
    return null
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <WalletUiItem wallet={active} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={async () => {
              if (item.id === active?.id) {
                return
              }
              await setActive(item.id)
              toastSuccess(`Switched to wallet: ${item.name}`)
            }}
          >
            <WalletUiItem wallet={item} withCopy />
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to={`/settings/accounts/${active.accountId}`}>
            <LucideWallet2 />
            Wallet settings
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
