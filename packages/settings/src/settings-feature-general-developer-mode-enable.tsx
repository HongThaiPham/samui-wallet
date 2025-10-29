import { useDbPreference } from '@workspace/db-react/use-db-preference'
import { Label } from '@workspace/ui/components/label'
import { Switch } from '@workspace/ui/components/switch'

export function SettingsFeatureGeneralDeveloperModeEnable() {
  const [enabled, setEnabled] = useDbPreference('developerModeEnabled')

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={enabled === 'true'}
        id="enable-developer-mode"
        onCheckedChange={(checked) => setEnabled(`${checked}`)}
      />
      <Label htmlFor="enable-developer-mode">Enable developer mode</Label>
    </div>
  )
}
