import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "UniFi Talk - Use the Phones - QPCTech",
  description: "Learn how to use UniFi Talk phones.",
};

export default function UniFiTalkPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            UniFi Talk - Use the Phones
          </h1>
        </header>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8">
            <Image
                src="https://www.qpctech.com/wp-content/uploads/2024/01/UniFi-Talk-1.png"
                alt="UniFi Talk Phones"
                fill
                className="object-cover"
            />
        </div>

        <div className="text-black space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">Configure Voicemail</CardTitle>
                </CardHeader>
                <CardContent className="text-black space-y-4">
                    <p>To configure voicemail on the Touch and Touch Max phone:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>From the Keypad, <strong>dial *86</strong> or <strong>long-press 1</strong> to access voicemail configuration</li>
                        <li>Follow the audio prompts to complete voicemail configuration.</li>
                    </ol>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">Forward an Incoming Call</CardTitle>
                </CardHeader>
                <CardContent className="text-black space-y-4">
                     <p>To forward an incoming call on the Touch and Touch Max phone:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>From the incoming call screen, press the blue <strong>Forward</strong> button to view your contact list.</li>
                        <li>Select a contact to forward the incoming call.</li>
                    </ol>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">Start a Parallel Call</CardTitle>
                </CardHeader>
                <CardContent className="text-black space-y-4">
                    <p>To start a parallel call (i.e., start a new call while one or more calls are already ongoing) on the Touch and Touch Max phone:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>From the active call screen, press the <strong>Add / Transfer</strong> button.</li>
                        <li>There are two options for starting a parallel call:
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li>From the <strong>Contacts</strong> tab off the Add / Transfer screen, select a contact from your contact list.</li>
                                <li>From the <strong>Keypad</strong> tab of the Add / Transfer screen, dial a number and press the green button at the bottom of the screen.</li>
                            </ul>
                        </li>
                        <li>Press the <strong>Call</strong> button to start a parallel call. The current active call will be placed on hold.</li>
                        <li>When two or more calls are active in parallel, swipe left or right to navigate between active calls.</li>
                    </ol>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">Transfer an Active Call</CardTitle>
                </CardHeader>
                <CardContent className="text-black space-y-4">
                     <ol className="list-decimal pl-5 space-y-2">
                        <li>From the active call screen, press the <strong>Add / Transfer</strong> button.</li>
                        <li>There are two options for transferring an active call:
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li>From the <strong>Contacts</strong> tab of the Add / Transfer screen, select a contact from your contact list.</li>
                                <li>From the <strong>Keypad</strong> tab of the Add / Transfer screen, dial a number and press the green button at the bottom of the screen.</li>
                            </ul>
                        </li>
                        <li>You will have the option to press <strong>Transfer</strong> or <strong>Warm Transfer.</strong>
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li>If you press the <strong>Transfer</strong> button, this will utilize a cold (blind) transfer. The active call will immediately be transferred and will ring the destination phone once you press the <strong>Transfer</strong> button.</li>
                                <li>If you select the <strong>Warm Transfer</strong> option, the original caller is placed on hold while the transfer destination is dialed. The transfer destination has to be picked up, at which point you have to again press the blue transfer button to complete the transfer.</li>
                            </ul>
                        </li>
                    </ol>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">Start a Conference Call</CardTitle>
                </CardHeader>
                <CardContent className="text-black space-y-4">
                    <p>To start a conference call on the Touch and Touch Max phone:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>From the active call screen, press the Add / Transfer button.</li>
                        <li>There are two options for adding additional parties to a conference call:
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li>From the <strong>Contacts</strong> tab of the Add / Transfer screen, select a contact and press the <strong>Add to Call</strong> button.</li>
                                <li>From the <strong>Keypad</strong> tab of the Add / Transfer screen, dial the additional party’s number, press the green button at the bottom of the screen, and select the <strong>Add to Call</strong> option.</li>
                            </ul>
                        </li>
                    </ol>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">Manage your Status</CardTitle>
                </CardHeader>
                <CardContent className="text-black space-y-4">
                    <p>To manage your status on the Touch and Touch Max phone:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Press the <strong>App Selector</strong> button, located below the phone’s touchscreen to the left of the Ubiquiti logo.</li>
                        <li>Select <strong>Settings</strong> and click on <strong>My Status</strong>.</li>
                        <li>From here, you can select between three status settings:
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li>Create a <strong>DND Allow List</strong> to allow specific numbers to ring your device when your status is set to Do Not Disturb.</li>
                                <li>Specify a redirect number using the <strong>Change Redirect Number</strong> button on the My Status page.
                                    <ol className="list-decimal pl-5 space-y-1 mt-1">
                                        <li><strong>Available:</strong> Incoming calls will ring your device.</li>
                                        <li><strong>Do Not Disturb (DND):</strong> Incoming calls will be sent to voicemail.</li>
                                        <li><strong>Redirect:</strong> Incoming calls will be forwarded to the specified redirect number.</li>
                                    </ol>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">Resources</CardTitle>
                </CardHeader>
                <CardContent className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                        <li><a href="https://help.ui.com/hc/en-us/sections/6581890284695-Talk" target="_blank" rel="noopener" className="text-primary hover:underline">UniFi Talk Help Portal</a>
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                                <li><a href="https://help.ui.com/hc/en-us/articles/4409791920791-UniFi-Talk-Use-UniFi-Talk-Devices" target="_blank" rel="noopener" className="text-primary hover:underline">UniFi Talk - Use UniFi Talk Devices</a></li>
                                <li><a href="https://help.ui.com/hc/en-us/articles/1500000304422-UniFi-Talk-Use-the-UniFi-Talk-Application" target="_blank" rel="noopener" className="text-primary hover:underline">UniFi Talk - Use the UniFi Talk Application</a></li>
                                <li><a href="https://help.ui.com/hc/en-us/articles/360058776614-UniFi-Talk-Manage-UniFi-Talk-subscriptions" target="_blank" rel="noopener" className="text-primary hover:underline">UniFi Talk - Manage UniFi Talk Subscriptions</a></li>
                                <li><a href="https://help.ui.com/hc/en-us/articles/4407676051351-UniFi-Talk-Number-Porting" target="_blank" rel="noopener" className="text-primary hover:underline">UniFi Talk - Number Porting</a></li>
                            </ul>
                        </li>
                    </ul>
                </CardContent>
            </Card>

        </div>

        <nav className="mt-12" aria-label="Page navigation">
          <Button asChild variant="outline">
            <Link href="/services/phone-systems">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Phone Systems
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
