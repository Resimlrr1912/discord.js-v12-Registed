const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'yetkili-cagir',
    description: 'Yetkili çağırma butonu oluşturur.',
    execute(message, args) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('yetkiliCagir')
                    .setLabel('Yetkili Çağır')
                    .setStyle('PRIMARY'),
            );

        message.channel.send({ content: 'Bir yetkili çağırmak için butona tıklayın:', components: [row] });
    },
};
