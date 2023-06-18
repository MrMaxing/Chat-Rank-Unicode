import * as mc from '@minecraft/server';
mc.world.events.beforeChat.subscribe((event) => {
    const player = event.sender;
    const message = event.message;
    const rank = player.getTags().filter((tag) => tag.startsWith('rank:')).map((tag) => tag.split(':')[1]).join('');
    const display = rank.length > 0 ? rank : '';
    if (player.hasTag('ban_chat'))
        return;
    system.run(() => {
        event.cancel = true;
        mc.world.sendMessage(`${display} §7${player.name}: §r${message}`);
    });
});
