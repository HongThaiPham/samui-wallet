import type { Wallet } from '@workspace/db/entity/wallet'

import { Button } from '@workspace/ui/components/button'
import { handleCopyText } from '@workspace/ui/lib/handle-copy-text'
import { toastSuccess } from '@workspace/ui/lib/toast-success'
import { CopyIcon } from 'lucide-react'

import { WalletUiIcon } from './wallet-ui-icon.js'

export function WalletUiItem({ wallet, withCopy = false }: { wallet: Wallet; withCopy?: boolean }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <WalletUiIcon type={wallet.type} />
      <span className="font-mono select-none">{wallet.name}</span>

      {withCopy ? (
        <Button
          className="ml-auto"
          onClick={(e) => {
            e.stopPropagation()
            handleCopyText(wallet.publicKey)
            toastSuccess(`Copied Public Key: ${wallet.name}`)
          }}
          size={'icon'}
          variant="ghost"
        >
          <CopyIcon />
        </Button>
      ) : null}
    </div>
  )
}
