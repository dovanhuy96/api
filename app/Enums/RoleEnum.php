<?php

namespace App\Enums;

use Illuminate\Validation\Rules\Enum as RulesEnum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class RoleEnum extends RulesEnum
{
    const ADMIN = 'admin';
    const USER = 'user';
}
