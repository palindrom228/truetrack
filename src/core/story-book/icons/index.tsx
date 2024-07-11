import React from "react";

import {ArrowBackIcon} from "./arrowBack/index.tsx";
import {CalendarIcon} from "./calendar/calendar";
import {ClientsIcon} from "./clients/clients";
import {
  CircleContainer,
  CircleContainerI,
  mapToIconI,
} from "./containers/CircleContainer";
import {CrossIconCircle} from "./cross/index.tsx";
import {PaperAirPlaneIcon} from "./paperAirPlane/index.tsx";
import {PlusIcon} from "./plus/index.tsx";
import {ShowPasswordIcon} from "./showPasssword/showPasswordIcon.tsx";
import {StarIcon} from "./star/starIcon.tsx";
import {WalletIcon} from "./wallet/wallet";

export interface IconI {
  size?: number;
  color?: string;
}
export namespace Icons {
  interface ContaineredShowPassword extends CircleContainerI {
    closed: boolean;
  }

  export const ShowPassword = {
    filled: ShowPasswordIcon,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: ShowPasswordIcon,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <ShowPasswordIcon {...mapToIconI(props)} closed={props.closed} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <ShowPasswordIcon {...mapToIconI(props)} closed={props.closed} />
      </CircleContainer>
    ),
  };

  export const Clients = {
    filled: ClientsIcon,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: ClientsIcon,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <ClientsIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <ClientsIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
  };

  export const Calendar = {
    filled: CalendarIcon,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: CalendarIcon,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <CalendarIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <CalendarIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
  };

  export const Star = {
    filled: StarIcon,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: StarIcon,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <StarIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <StarIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
  };

  export const Wallet = {
    filled: WalletIcon,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: WalletIcon,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <WalletIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <WalletIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
  };

  export const Plus = {
    filled: PlusIcon,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: PlusIcon,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <PlusIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <PlusIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
  };

  export const ArrowBack = {
    filled: ArrowBackIcon,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: ArrowBackIcon,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <ArrowBackIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <ArrowBackIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
  };

  export const CrossCircle = {
    filled: CrossIconCircle,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: CrossIconCircle,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <CrossIconCircle {...mapToIconI(props)} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <CrossIconCircle {...mapToIconI(props)} />
      </CircleContainer>
    ),
  };

  export const PaperAirPlane = {
    filled: PaperAirPlaneIcon,
    // Todo : найти иконку nonFilled и добавить, тут стоит filled иконка
    nonFilled: PaperAirPlaneIcon,
    filledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <PaperAirPlaneIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
    nonFilledInCircle: (props: ContaineredShowPassword) => (
      <CircleContainer {...props}>
        <PaperAirPlaneIcon {...mapToIconI(props)} />
      </CircleContainer>
    ),
  };
}
