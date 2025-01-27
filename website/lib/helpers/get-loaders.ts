import type { LoaderCategories, LoaderProps } from '@/types';
import { cache } from 'react';

// Create a function to generate loaders
const _ = (
    name: string,
    category: LoaderCategories,
    speed: number,
    keyframes: string[],
): LoaderProps => ({ name, category, speed, keyframes });

// Create a function and data structure to retrieve loaders
export const loaders = cache(() => ({
    arrows_1: _('arrows_1', 'Arrows', 100, ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙']),
    arrows_2: _('arrows_2', 'Arrows', 80, ['⬆️ ', '↗️ ', '➡️ ', '↘️ ', '⬇️ ', '↙️ ', '⬅️ ', '↖️ ']),
    arrows_3: _('arrows_3', 'Arrows', 120, ['▹▹▹▹▹', '▸▹▹▹▹', '▹▸▹▹▹', '▹▹▸▹▹', '▹▹▹▸▹', '▹▹▹▹▸']),
    arrows_4: _('arrows_4', 'Arrows', 100, ['⇐', '⇑', '⇒', '⇓']),
    arrows_5: _('arrows_5', 'Arrows', 100, ['↑', '→', '↓', '←']),
    bars_1: _('bars_1', 'Bars', 80, ['[    ]', '[=   ]', '[==  ]', '[=== ]', '[====]', '[ ===]', '[  ==]', '[   =]', '[    ]', '[   =]', '[  ==]', '[ ===]', '[====]', '[=== ]', '[==  ]', '[=   ]']),
    bars_2: _('bars_2', 'Bars', 80, ['|_●____|', '|__●___|', '|___●__|', '|____●_|', '|_____●|', '|____●_|', '|___●__|', '|__●___|', '|_●____|', '|●_____|']),
    bars_3: _('bars_3', 'Bars', 17, ['█▁▁▁▁▁▁▁', '██▁▁▁▁▁▁', '███▁▁▁▁▁', '████▁▁▁▁', '██████▁▁', '██████▁▁', '███████▁', '████████', '████████', '████████', '████████', '████████', '████████', '████████', '████████', '▁███████', '▁███████', '▁███████', '▁▁██████', '▁▁▁█████', '▁▁▁▁████', '▁▁▁▁████', '▁▁▁▁████', '▁▁▁▁▁███', '▁▁▁▁▁███', '▁▁▁▁▁███', '▁▁▁▁▁▁██', '▁▁▁▁▁▁██', '▁▁▁▁▁▁▁█', '▁▁▁▁▁▁▁█', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁']),
    bars_4: _('bars_4', 'Bars', 100, ['|█████|', '|████|', '|███|', '|██|', '|█|', '||', '|█|', '|██|', '|███|', '|████|', '|█████|']),
    bars_5: _('bars_5', 'Bars', 100, ['|█||||', '||█|||', '|||█||', '||||█|', '||||█|', '|||█||', '||█|||', '|█||||']),
    arc: _('arc', 'Circles', 100, ['◜', '◠', '◝', '◞', '◡', '◟']),
    balloon_1: _('balloon_1', 'Circles', 140, ['.', 'o', 'O', '@', '*']),
    balloon_2: _('balloon_2', 'Circles', 120, ['.', 'o', 'O', '°', 'O', 'o', '.']),
    circle_1: _('circle_1', 'Circles', 120, ['◡', '⊙', '◠']),
    circle_2: _('circle_2', 'Circles', 50, ['◐', '◓', '◑', '◒']),
    circle_3: _('circle_3', 'Circles', 120, ['◴', '◷', '◶', '◵']),
    dots_1: _('dots_1', 'Dots', 80, ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']),
    dots_2: _('dots_2', 'Dots', 80, ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']),
    dots_3: _('dots_3', 'Dots', 80, ['⠋', '⠙', '⠚', '⠞', '⠖', '⠦', '⠴', '⠲', '⠳', '⠓']),
    dots_4: _('dots_4', 'Dots', 80, ['⠄', '⠆', '⠇', '⠋', '⠙', '⠸', '⠰', '⠠', '⠰', '⠸', '⠙', '⠋', '⠇', '⠆']),
    dots_5: _('dots_5', 'Dots', 80, ['⠋', '⠙', '⠚', '⠒', '⠂', '⠂', '⠒', '⠲', '⠴', '⠦', '⠖', '⠒', '⠐', '⠐', '⠒', '⠓', '⠋']),
    dots_6: _('dots_6', 'Dots', 80, ['⠁', '⠉', '⠙', '⠚', '⠒', '⠂', '⠂', '⠒', '⠲', '⠴', '⠤', '⠄', '⠄', '⠤', '⠴', '⠲', '⠒', '⠂', '⠂', '⠒', '⠚', '⠙', '⠉', '⠁']),
    dots_7: _('dots_7', 'Dots', 80, ['⠈', '⠉', '⠋', '⠓', '⠒', '⠐', '⠐', '⠒', '⠖', '⠦', '⠤', '⠠', '⠠', '⠤', '⠦', '⠖', '⠒', '⠐', '⠐', '⠒', '⠓', '⠋', '⠉', '⠈']),
    dots_8: _('dots_8', 'Dots', 80, ['⠁', '⠁', '⠉', '⠙', '⠚', '⠒', '⠂', '⠂', '⠒', '⠲', '⠴', '⠤', '⠄', '⠄', '⠤', '⠠', '⠠', '⠤', '⠦', '⠖', '⠒', '⠐', '⠐', '⠒', '⠓', '⠋', '⠉', '⠈', '⠈']),
    dots_9: _('dots_9', 'Dots', 80, ['⢹', '⢺', '⢼', '⣸', '⣇', '⡧', '⡗', '⡏']),
    dots_10: _('dots_10', 'Dots', 80, ['⢄', '⢂', '⢁', '⡁', '⡈', '⡐', '⡠']),
    dots_11: _('dots_11', 'Dots', 100, ['⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈']),
    dots_12: _('dots_12', 'Dots', 80, ['⢀⠀', '⡀⠀', '⠄⠀', '⢂⠀', '⡂⠀', '⠅⠀', '⢃⠀', '⡃⠀', '⠍⠀', '⢋⠀', '⡋⠀', '⠍⠁', '⢋⠁', '⡋⠁', '⠍⠉', '⠋⠉', '⠋⠉', '⠉⠙', '⠉⠙', '⠉⠩', '⠈⢙', '⠈⡙', '⢈⠩', '⡀⢙', '⠄⡙', '⢂⠩', '⡂⢘', '⠅⡘', '⢃⠨', '⡃⢐', '⠍⡐', '⢋⠠', '⡋⢀', '⠍⡁', '⢋⠁', '⡋⠁', '⠍⠉', '⠋⠉', '⠋⠉', '⠉⠙', '⠉⠙', '⠉⠩', '⠈⢙', '⠈⡙', '⠈⠩', '⠀⢙', '⠀⡙', '⠀⠩', '⠀⢘', '⠀⡘', '⠀⠨', '⠀⢐', '⠀⡐', '⠀⠠', '⠀⢀', '⠀⡀']),
    dots_13: _('dots_13', 'Dots', 80, ['⣼', '⣹', '⢻', '⠿', '⡟', '⣏', '⣧', '⣶']),
    dots_14: _('dots_14', 'Dots', 80, ['⠉⠉', '⠈⠙', '⠀⠹', '⠀⢸', '⠀⣰', '⢀⣠', '⣀⣀', '⣄⡀', '⣆⠀', '⡇⠀', '⠏⠀', '⠋⠁']),
    dots_15: _('dots_15', 'Dots', 80, ['⢎ ', '⠎⠁', '⠊⠑', '⠈⠱', ' ⡱', '⢀⡰', '⢄⡠', '⢆⡀']),
    dots_16: _('dots_16', 'Dots', 80, ['⠁', '⠂', '⠄', '⡀', '⡈', '⡐', '⡠', '⣀', '⣁', '⣂', '⣄', '⣌', '⣔', '⣤', '⣥', '⣦', '⣮', '⣶', '⣷', '⣿', '⡿', '⠿', '⢟', '⠟', '⡛', '⠛', '⠫', '⢋', '⠋', '⠍', '⡉', '⠉', '⠑', '⠡', '⢁']),
    dots_17: _('dots_17', 'Dots', 120, ['⠁', '⠂', '⠄', '⠂']),
    car: _('car', 'Emojis', 200, ['_______', '______🏎️', '_____🏎️_', '____🏎️__', '___🏎️💨_', '__🏎️💨__', '_🏎️💨___', '🏎️_____', '_______']),
    ship: _('ship', 'Emojis', 100, ['_______', '______🚚', '_____🚚_', '____🚚__', '___🚚__', '__🚚___', '_🚚____', '🚚_____']),
    clock: _('clock', 'Emojis', 100, ['🕛 ', '🕐 ', '🕑 ', '🕒 ', '🕓 ', '🕔 ', '🕕 ', '🕖 ', '🕗 ', '🕘 ', '🕙 ', '🕚 ']),
    earth: _('earth', 'Emojis', 180, ['🌍 ', '🌎 ', '🌏 ']),
    hearts: _('hearts', 'Emojis', 100, ['💛 ', '💙 ', '💜 ', '💚 ', '❤️ ']),
    italian: _('italian', 'Emojis', 200, ['🫴', '🤌', '🤌', '🤌', '👌']),
    monkey: _('monkey', 'Emojis', 300, ['🙈 ', '🙈 ', '🙉 ', '🙊 ']),
    pastel: _('pastel', 'Emojis', 200, ['🔴 ', '🟢 ', '🔵 ', '⚪️ ', '🟤 ', '🟡 ', '🟣 ', '🟠 ']),
    smiley: _('smiley', 'Emojis', 200, ['😄 ', '😝 ']),
    flip: _('flip', 'Lines', 70, ['_', '_', '_', '-', '`', '`', "'", '´', '-', '_', '_', '_']),
    hamburger: _('hamburger', 'Lines', 100, ['☱', '☲', '☴']),
    lines_1: _('lines_1', 'Lines', 130, ['-', '\\', '|', '/']),
    lines_2: _('lines_2', 'Lines', 100, ['⠂', '-', '–', '—', '–', '-']),
    binary: _('binary', 'Numbers', 80, ['010010', '001100', '100101', '111010', '111101', '010111', '101011', '111000', '110011', '110101']),
    percent: _('percent', 'Numbers', 50, ['000', '001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '020', '021', '022', '023', '024', '025', '026', '027', '028', '029', '030', '031', '032', '033', '034', '035', '036', '037', '038', '039', '040', '041', '042', '043', '044', '045', '046', '047', '048', '049', '050', '051', '052', '053', '054', '055', '056', '057', '058', '059', '060', '061', '062', '063', '064', '065', '066', '067', '068', '069', '070', '071', '072', '073', '074', '075', '076', '077', '078', '079', '080', '081', '082', '083', '084', '085', '086', '087', '088', '089', '090', '091', '092', '093', '094', '095', '096', '097', '098', '099', '100']),
    traverse: _('traverse', 'Numbers', 200, ['100000', '010000', '001000', '000100', '000010', '000001', '000010', '000100', '001000', '001000', '010000']),
    index: _('index', 'Numbers', 100, ['000000', '010000', '012000', '012300', '012340', '012345', '012340', '012300', '012000', '010000', '000000']),
    vercel: _('vercel', 'Numbers', 80, ['000000', 'V01010', 'Ve0101', 'Ver010', 'Verc01', 'Verce0', 'Vercel', 'Vercel', 'Vercel', 'Verce0', 'Verc01', 'Ver010', 'Ve0101', 'V01010', '010101']),
    squares_1: _('squares_1', 'Squares', 120, ['▏', '▎', '▍', '▌', '▋', '▊', '▉', '▊', '▋', '▌', '▍', '▎']),
    squares_2: _('squares_2', 'Squares', 120, ['▁', '▃', '▄', '▅', '▆', '▇', '▆', '▅', '▄', '▃']),
    squares_3: _('squares_3', 'Squares', 120, ['▖', '▘', '▝', '▗']),
    squares_4: _('squares_4', 'Squares', 100, ['▌', '▀', '▐', '▄']),
    squares_5: _('squares_5', 'Squares', 100, ['▓', '▒', '░']),
    squares_6: _('squares_6', 'Squares', 180, ['◰', '◳', '◲', '◱']),
    squares_7: _('squares_7', 'Squares', 400, ['.  ', '.. ', '...']),
    squares_8: _('squares_8', 'Squares', 200, ['.  ', '.. ', '...', ' ..', '  .']),
    squares_9: _('squares_9', 'Squares', 50, ['◢', '◣', '◤', '◥']),
    box_3: _('box_3', 'Symbols', 100, ['┤', '┘', '┴', '└', '├', '┌', '┬', '┐']),
    squish: _('squish', 'Symbols', 100, ['╫', '╪']),
    star_1: _('star_1', 'Symbols', 70, ['✶', '✸', '✹', '✺', '✹', '✷']),
    star_2: _('star_2', 'Symbols', 80, ['+', 'x', '*']),
    togglers_1: _('togglers_1', 'Togglers', 250, ['⊶', '⊷']),
    togglers_2: _('togglers_2', 'Togglers', 80, ['▫', '▪']),
    togglers_3: _('togglers_3', 'Togglers', 120, ['□', '■']),
    togglers_4: _('togglers_4', 'Togglers', 100, ['■', '□', '▪', '▫']),
    togglers_5: _('togglers_5', 'Togglers', 100, ['▮', '▯']),
    togglers_6: _('togglers_6', 'Togglers', 300, ['⃝', 'Ⓞ']),
    togglers_7: _('togglers_7', 'Togglers', 80, ['⦾', '⦿']),
    togglers_8: _('togglers_8', 'Togglers', 100, ['◍', '◌']),
    togglers_9: _('togglers_9', 'Togglers', 100, ['◉', '◎']),
    togglers_10: _('togglers_10', 'Togglers', 100, ['㊂', '㊀', '㊁']),
    togglers_11: _('togglers_11', 'Togglers', 50, ['⧇', '⧆']),
    togglers_12: _('togglers_12', 'Togglers', 120, ['☗', '☖']),
    togglers_13: _('togglers_13', 'Togglers', 80, ['=', '*', '-']),
    togglers_14: _('togglers_14', 'Togglers', 300, ['❂', '✪']),
}));

export const getLoaders = loaders();

console.time('loaders');
const key = Object.keys(getLoaders).map((key) => getLoaders[key as keyof typeof getLoaders]);
console.log(key);
console.timeEnd('loaders');