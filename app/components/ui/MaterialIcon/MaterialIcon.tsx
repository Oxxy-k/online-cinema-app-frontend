import { FC } from 'react';
import { IconName } from '@/types/icon.types';
import * as MaterialIcons from 'react-icons/md';

export const MaterialIcon: FC<{ name: IconName }> = ({ name }) => {
    const IconComponent = MaterialIcons[name]

    return <IconComponent/> || <MaterialIcons.MdDragIndicator/>
}
